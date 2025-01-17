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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace notetakingapp_imp
{
    /// <summary>
    /// Interaction logic for SignUp_page.xaml
    /// </summary>
    public partial class SignUp_page : Window
    {
        private static readonly HttpClient client = new HttpClient();
        public SignUp_page()
        {
            InitializeComponent();
        }

        private void TextBox1_GotFocus(object sender, RoutedEventArgs e)
        {
            if (txtName.Text == "Name") 
            { 
                txtName.Text = ""; 
                txtName.Foreground = new SolidColorBrush(Colors.Black); 
            }
        }

        private void TextBox1_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtName.Text)) 
            {
                txtName.Text = "Name"; 
                txtName.Foreground = new SolidColorBrush(Colors.Gray); 
            }
        }

        private void TextBox2_GotFocus(object sender, RoutedEventArgs e)
        {
            if (txtEmail.Text == "Email") 
            {
                txtEmail.Text = ""; 
                txtEmail.Foreground = new SolidColorBrush(Colors.Black); 
            }
        }

        private void TextBox2_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtEmail.Text)) 
            {
                txtEmail.Text = "Email"; 
                txtEmail.Foreground = new SolidColorBrush(Colors.Gray); 
            }
        }

        private void TextBox3_GotFocus(object sender, RoutedEventArgs e)
        {
            if (txtPassword.Text == "Password") 
            {
                txtPassword.Text = ""; 
                txtPassword.Foreground = new SolidColorBrush(Colors.Black); 
            }
        }

        private void TextBox3_LostFocus(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtPassword.Text)) 
            {
                txtPassword.Text = "Password";
                txtPassword.Foreground = new SolidColorBrush(Colors.Gray); 
            }
        }
        private void Hyperlink_Click(object sender, RoutedEventArgs e)
        {
            
            var login_page = new login_page();
            login_page.Show();
            this.Close(); 
        }


        private async void CreateUser_Click(object sender, RoutedEventArgs e)
        {
            
            string name = txtName.Text;
            string email = txtEmail.Text;
            string password = txtPassword.Text;

            
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("All fields are required.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            var user = new
            {
                name,
                email,
                password
            };

            string json = JsonConvert.SerializeObject(user); 
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            try
            {
                
                HttpResponseMessage response = await client.PostAsync("http://localhost:8800/api/user/createuser", content);

                if (response.IsSuccessStatusCode)
                {
                    string responseString = await response.Content.ReadAsStringAsync();
                    dynamic result = JsonConvert.DeserializeObject(responseString); 
                    MessageBox.Show($"User created successfully. User ID: {result.userId}", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                else
                {
                    string errorResponse = await response.Content.ReadAsStringAsync();
                    MessageBox.Show($"Error: {errorResponse}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        

    }
}
