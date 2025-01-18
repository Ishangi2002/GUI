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
    /// <summary>
    /// Interaction logic for AddNoteWindow.xaml
    /// </summary>
    public partial class AddNoteWindow : Window
    {
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

    }
}
