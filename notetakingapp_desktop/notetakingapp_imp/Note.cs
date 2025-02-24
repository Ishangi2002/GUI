using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace notetakingapp_imp
{
    public class Note
    {
        public int id { get; set; }
        public string ?Title { get; set; }
        public string ?Content { get; set; }
        public string ?Tags { get; set; }
        public string ?CreatedAt { get; set; }
        public string ?UpdatedAt { get; set; }


        // Property to format the date
        public string FormattedDate
        {
            get
            {
                if (string.IsNullOrEmpty(CreatedAt))
                    return "No Date Available";

                try
                {
                    DateTime parsedDate = DateTime.Parse(CreatedAt, null, DateTimeStyles.RoundtripKind); 
                    return parsedDate.ToString("dd MMM yyyy"); // Format as "10th Jan 2025"
                }
                catch (FormatException)
                {
                    return "Invalid Date"; // If parsing fails, return "Invalid Date"
                }
            }
        }



    }

}
