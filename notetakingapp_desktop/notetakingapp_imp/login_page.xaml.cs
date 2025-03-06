using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;

namespace notetakingapp_imp
{
    public partial class login_page : Window
    {
        private static readonly HttpClient client = new HttpClient();

        public login_page()
        {
            InitializeComponent();
        }

        private void btnLogin_MouseEnter(object sender, MouseEventArgs e)
        {
            btnLogin.Background = Brushes.Purple;
        }

        private void btnLogin_MouseLeave(object sender, MouseEventArgs e)
        {
            btnLogin.Background = Brushes.Violet;
        }

        private void Hyperlink_Click(object sender, RoutedEventArgs e)
        {
            var SignUp_page = new SignUp_page();
            SignUp_page.Show();
            this.Close();
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

        //Login API call
        private async void btnLogin_Click(object sender, RoutedEventArgs e)
        {
            string email = txtEmail.Text;
            string password = txtPassword.Text;

            if (string.IsNullOrEmpty(email) || email == "Email")
            {
                MessageBox.Show("Please enter the email.");
                return;
            }
            else if (string.IsNullOrEmpty(password) || password == "Password")
            {
                MessageBox.Show("Please enter the password.");
                return;
            }

            var loginData = new
            {
                email = email,
                password = password
            };

            var json = JsonConvert.SerializeObject(loginData);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            try
            {
                HttpResponseMessage response = await client.PostAsync("http://localhost:8800/api/auth/login", content);

                // Log response status code and body
                string responseBody = await response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)
                {
                    var responseData = JsonConvert.DeserializeObject<dynamic>(responseBody);
                    string token = responseData.token;
                    string name = responseData.name;
                    string Email = responseData.email;
                    int userId = responseData.id;

                    // Store user details in UserSession
                    UserSession.UserId = userId;
                    UserSession.Token = token;
                    UserSession.Name = name;
                    UserSession.UserEmail = email;

                    // Pass user details to MainWindow
                    MainWindow mainPage = new MainWindow();
                    mainPage.Show();
                    this.Close();
                }
                else
                {
                    MessageBox.Show($"Login failed: {responseBody}");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }
    }
}
