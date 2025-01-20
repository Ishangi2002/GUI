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
                        // Read response as a string
                        string jsonResponse = await response.Content.ReadAsStringAsync();

                        // Deserialize JSON into a collection of notes
                        var notesData = JsonConvert.DeserializeObject<ObservableCollection<Note>>(jsonResponse);

                        Notes.Clear();

                        foreach (var note in notesData)
                        {
                            if (string.IsNullOrEmpty(note.Date))
                            {
                                note.Date = "No Date Available"; // Default message
                            }
                            else
                            {
                                // Try to parse the date if it's in a specific format
                                try
                                {
                                    DateTime parsedDate = DateTime.ParseExact(note.Date, "yyyy-MM-dd", CultureInfo.InvariantCulture);
                                    note.Date = parsedDate.ToString("dd MMM yyyy"); // Format to "10th Jan 2025"
                                }
                                catch (FormatException)
                                {
                                    note.Date = "Invalid Date"; // If parsing fails, set "Invalid Date"
                                }
                            }
                            Console.WriteLine($"Note Date: {note.Date}");
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

    }



}

