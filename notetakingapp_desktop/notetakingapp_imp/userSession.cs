using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace notetakingapp_imp
{
    public static class UserSession
    {
        // Static properties to hold user data
        public static int UserId { get; set; }
        public static string Token { get; set; }
        public static string Name { get; set; }
        public static string UserEmail { get; set; }




        public static void Logout()
        {
            UserSession.UserId = 0;
            UserSession.Token = string.Empty;
           
        }
        
    }
}
