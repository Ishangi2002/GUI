using System.Windows;

namespace notetakingapp_imp
{
    public partial class ProfileWindow : Window
    {
        private string userName;
        private string userEmail;

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

        private void SaveChanges_Click(object sender, RoutedEventArgs e)
        {
            userName = NameTextBox.Text;
            userEmail = EmailTextBox.Text;
            UpdateProfileInfo();

            ProfileEditSection.Visibility = Visibility.Collapsed;
            ProfileViewSection.Visibility = Visibility.Visible;
        }

        private void CancelEdit_Click(object sender, RoutedEventArgs e)
        {
            ProfileEditSection.Visibility = Visibility.Collapsed;
            ProfileViewSection.Visibility = Visibility.Visible;
        }
    }
}
