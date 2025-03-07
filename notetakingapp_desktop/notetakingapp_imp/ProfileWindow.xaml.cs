using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Newtonsoft.Json;

namespace notetakingapp_imp
{
    public partial class ProfileWindow : Window
    {
        private string userName;
        private string userEmail;
        private static readonly HttpClient client = new HttpClient();

        public ProfileWindow(string name, string email)
        {
            InitializeComponent();
            userName = name;
            userEmail = email;

            UpdateProfileInfo();
        }

        private void UpdateProfileInfo()
        {
            WelcomeMessage.Text = $"Welcome back, {userName}!";
            UserNameText.Text = $"Name: {userName}";
            UserEmailText.Text = $"Email: {userEmail}";

            NameTextBox.Text = userName;
            EmailTextBox.Text = userEmail;
        }

        private void EditProfile_Click(object sender, RoutedEventArgs e)
        {
            ProfileViewSection.Visibility = Visibility.Collapsed;
            ProfileEditSection.Visibility = Visibility.Visible;
        }

        private async void SaveChanges_Click(object sender, RoutedEventArgs e)
        {
            userName = NameTextBox.Text;
            userEmail = EmailTextBox.Text;

            bool isUpdated = await UpdateUserAsync(UserSession.UserId, userName, userEmail);

            if (isUpdated)
            {
                UpdateProfileInfo();
                ProfileEditSection.Visibility = Visibility.Collapsed;
                ProfileViewSection.Visibility = Visibility.Visible;
                MessageBox.Show("Profile updated successfully!");
            }
            else
            {
                MessageBox.Show("Failed to update profile.");
            }
        }

        private void CancelEdit_Click(object sender, RoutedEventArgs e)
        {
            ProfileEditSection.Visibility = Visibility.Collapsed;
            ProfileViewSection.Visibility = Visibility.Visible;
        }

        private async Task<bool> UpdateUserAsync(int userId, string name, string email)
        {
            var userData = new
            {
                id = userId,
                name = name,
                email = email
            };

            string json = JsonConvert.SerializeObject(userData);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            try
            {
                HttpResponseMessage response = await client.PutAsync($"http://localhost:8800/api/user/updateUser/{userId}", content);
                if (response.IsSuccessStatusCode)
                {
                    return true;
                }
                else
                {
                    MessageBox.Show("Error: " + response.ReasonPhrase);
                    return false;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
                return false;
            }
        }

        private async void DeleteAccount_Click(object sender, RoutedEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show("Are you sure you want to delete your account? ", "Confirm Deletion", MessageBoxButton.YesNo, MessageBoxImage.Warning);

            if (result == MessageBoxResult.Yes)
            {
                int userId = UserSession.UserId;
                string apiUrl = $"http://localhost:8800/api/user/deleteUser/{userId}";

                try
                {
                    HttpResponseMessage response = await client.DeleteAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Account deleted successfully.");
                        this.Close();
                    }
                    else
                    {
                        MessageBox.Show("Failed to delete account: " + response.ReasonPhrase);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }
    }
}
