using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Globalization;
using System.Net.Http;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using Newtonsoft.Json;

namespace notetakingapp_imp
{
    public partial class MainWindow : Window, INotifyPropertyChanged
    {
        private ObservableCollection<Note> Notes;
        private string _loggedInUsername;

        public string LoggedInUsername
        {
            get => _loggedInUsername;
            set
            {
                _loggedInUsername = value;
                OnPropertyChanged();
            }
        }

        public MainWindow()
        {
            InitializeComponent();
            Notes = new ObservableCollection<Note>();
            NotesList.ItemsSource = Notes;
            LoadNotesAsync(UserSession.UserId);

            // Set the logged-in username
            LoggedInUsername = UserSession.Name; 
            DataContext = this; 
        }

        // Implement INotifyPropertyChanged
        public event PropertyChangedEventHandler PropertyChanged;
        protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            var login_page = new login_page();
            login_page.Show();
            this.Close();
        }

        private async void RefreshButton_Click(object sender, RoutedEventArgs e)
        {
            await LoadNotesAsync(UserSession.UserId);
        }

        private void ProfileButton_Click(object sender, RoutedEventArgs e)
        {
            ProfileWindow profileWindow = new ProfileWindow(UserSession.Name, UserSession.UserEmail);
            profileWindow.Show();
        }

        private void SearchTextBox_GotFocus(object sender, RoutedEventArgs e)
        {
            if (searchTextBox.Text == "Search Notes")
            {
                searchTextBox.Text = "";
            }
        }

        private void SearchTextBox_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrEmpty(searchTextBox.Text))
            {
                searchTextBox.Text = "Search Notes";
            }
        }

        private void AddNoteButton_Click(object sender, RoutedEventArgs e)
        {
            AddNoteWindow addNoteWindow = new AddNoteWindow();
            addNoteWindow.ShowDialog();
        }

        private async Task LoadNotesAsync(int userId)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    string apiUrl = $"http://localhost:8800/api/note/getNotes/{userId}";
                    HttpResponseMessage response = await client.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        string jsonResponse = await response.Content.ReadAsStringAsync();
                        var notesData = JsonConvert.DeserializeObject<ObservableCollection<Note>>(jsonResponse);

                        Notes.Clear();

                        foreach (var note in notesData)
                        {
                            if (string.IsNullOrEmpty(note.CreatedAt))
                            {
                                note.CreatedAt = "No Date Available";
                            }
                            else
                            {
                                try
                                {
                                    DateTime parsedDate = DateTime.Parse(note.CreatedAt, null, DateTimeStyles.RoundtripKind);
                                    note.CreatedAt = parsedDate.ToString("dd MMM yyyy");
                                }
                                catch (FormatException)
                                {
                                    note.CreatedAt = "Invalid Date";
                                }
                            }

                            Notes.Add(note);
                        }
                    }
                    else
                    {
                        MessageBox.Show($"Error: {response.ReasonPhrase}");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error fetching notes: {ex.Message}");
            }
        }

        private Note selectedNote;

        private void click_Edit(object sender, RoutedEventArgs e)
        {
            var note = (sender as FrameworkElement).DataContext as Note;

            if (note != null)
            {
                selectedNote = note;
                var updateWindow = new UpdateWindow(selectedNote.id);
                updateWindow.Show();
            }
        }

        private async void click_Delete(object sender, RoutedEventArgs e)
        {
            var note = (sender as FrameworkElement).DataContext as Note;

            if (note != null)
            {
                try
                {
                    using (HttpClient client = new HttpClient())
                    {
                        string apiUrl = $"http://localhost:8800/api/note/deleteNotes/{note.id}";

                        HttpResponseMessage response = await client.DeleteAsync(apiUrl);

                        if (response.IsSuccessStatusCode)
                        {
                            Notes.Remove(note);
                            MessageBox.Show("Note deleted successfully.");
                        }
                        else
                        {
                            string errorMessage = await response.Content.ReadAsStringAsync();
                            MessageBox.Show($"Error: {errorMessage}");
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Error deleting note: {ex.Message}");
                }
            }
        }

    }
}