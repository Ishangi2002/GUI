using System;
using System.Collections.Generic;
using System.Linq;
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
    
    public partial class landing_page : Window
    {
        public landing_page()
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

        private void btnSignUp_MouseEnter(object sender, MouseEventArgs e)
        {
            btnSignUp.Background = Brushes.Purple;
        }

        private void btnSignUp_MouseLeave(object sender, MouseEventArgs e)
        {
            btnSignUp.Background = Brushes.White;
        }


        private void openWindow1(object sender, RoutedEventArgs e)
        {
            login_page objlogin_page = new login_page();
            this.Visibility = Visibility.Hidden;
            objlogin_page.Show();
        }

        private void OpenWindow2(object sender, RoutedEventArgs e)
        {
            SignUp_page objSignUp_page = new SignUp_page();
            this.Visibility = Visibility.Hidden;
            objSignUp_page.Show();
        }
    }
}
