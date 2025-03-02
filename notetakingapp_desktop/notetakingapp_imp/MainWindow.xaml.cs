using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using Newtonsoft.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace notetakingapp_imp
{
    public partial class MainWindow : Window
    {
        private ObservableCollection<Note> Notes;

        public MainWindow()
        {
            InitializeComponent();
            Notes = new ObservableCollection<Note>();
            NotesList.ItemsSource = Notes;
            LoadNotesAsync(UserSession.UserId);
           
        }

        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            var login_page = new login_page();
            login_page.Show();
            this.Close();
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

        // Event handler for the "Add Note" button
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
                //DeleteNotes API call
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

