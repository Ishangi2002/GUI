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
    public partial class UpdateWindow : Window
    {
        private static readonly HttpClient client = new HttpClient();
        private int id;
        public UpdateWindow(int noteId)
        {
            InitializeComponent();
            id = noteId;
            
            
            
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
        private async void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            // Retrieve input values
            string title = txtTitle.Text;
            string content = txtContent.Text;
            string tags = txtTags.Text;

            if (id == 0)
            {
                MessageBox.Show("Invalid note ID.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            string apiUrl = $"http://localhost:8800/api/note/updateNotes/{id}";
            var note = new
            {
                title = title,
                content = content,
                tagString = tags,
                

            };

            try
            {
                using (HttpClient client = new HttpClient())
                {
                    // Convert note object to JSON
                    string json = JsonConvert.SerializeObject(note);
                    StringContent contentData = new StringContent(json, Encoding.UTF8, "application/json");

                  
                    HttpResponseMessage response = await client.PutAsync(apiUrl, contentData);

                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Note has been updated successfully.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
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

