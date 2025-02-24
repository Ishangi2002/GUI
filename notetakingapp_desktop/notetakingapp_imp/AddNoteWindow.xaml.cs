using MySqlX.XDevAPI;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace notetakingapp_imp
{
    public partial class AddNoteWindow : Window
    {
        private static readonly HttpClient client = new HttpClient();
        public AddNoteWindow()
        {
            InitializeComponent();
        }

        private void TitleBox_GotFocus(object sender, RoutedEventArgs e)
        {
            if (txtTitle.Text == "Do the Maths Assignment")
            {
                txtTitle.Text = "";
                txtTitle.Foreground = new SolidColorBrush(Colors.Black);
            }
        }

        private void TitleBox_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtTitle.Text))
            {
                txtTitle.Text = "Do the Maths Assignment";
                txtTitle.Foreground = new SolidColorBrush(Colors.Gray); 
            }
        }
        private void ContentBox_GotFocus(object sender, RoutedEventArgs e)
        {
            if (txtContent.Text == "Content")
            {
                txtContent.Text = "";
                txtContent.Foreground = new SolidColorBrush(Colors.Black);
            }
        }

        private void ContentBox_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtTags.Text))
            {
                txtTags.Text = "Content";
                txtTags.Foreground = new SolidColorBrush(Colors.Gray);
            }
        }
        private void TagBox_GotFocus(object sender, RoutedEventArgs e)
        {
            if (txtTags.Text == "Add tags")
            {
                txtTags.Text = "";
                txtTags.Foreground = new SolidColorBrush(Colors.Black);
            }
        }

        private void TagBox_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtTags.Text))
            {
                txtTags.Text = "Add tags";
                txtTags.Foreground = new SolidColorBrush(Colors.Gray);
            }
        }
        private async void AddNoteButton_Click(object sender, RoutedEventArgs e)
        {
            // Retrieve input values
            string title = txtTitle.Text;
            string content = txtContent.Text;
            string tags = txtTags.Text;
            int userId = UserSession.UserId;

            string apiUrl = "http://localhost:8800/api/note/addNote"; 
            var note = new
            {
                title = title,
                content = content,
                tagString = tags,
                user_id = userId

            };

            try
            {
                using (HttpClient client = new HttpClient())
                {
                    // Convert note object to JSON
                    string json = JsonConvert.SerializeObject(note);
                    StringContent contentData = new StringContent(json, Encoding.UTF8, "application/json");

                    // Make POST request
                    HttpResponseMessage response = await client.PostAsync(apiUrl, contentData);

                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Note has been added successfully.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                        this.Close();
                    }
                    else
                    {
                        string error = await response.Content.ReadAsStringAsync();
                        MessageBox.Show($"Error: {error}", "Failed", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }



}

