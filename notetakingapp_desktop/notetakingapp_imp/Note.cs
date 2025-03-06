using System;
using System.Globalization;

namespace notetakingapp_imp
{
    public class Note
    {
        public int id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Tags { get; set; }
        public string? CreatedAt { get; set; }
        public string? UpdatedAt { get; set; }

        // Property to format the date
        public string FormattedDate
        {
            get
            {
                if (string.IsNullOrEmpty(CreatedAt))
                {
                    Console.WriteLine("CreatedAt is null or empty");
                    return "No Date Available";
                }

                
                string[] formats = {
            "yyyy-MM-dd'T'HH:mm:ss.fff'Z'",
            "yyyy-MM-dd'T'HH:mm:ss'Z'",
            "yyyy-MM-ddTHH:mm:ssZ",
            "yyyy-MM-ddTHH:mm:ss.fffZ"
        };

                if (DateTime.TryParseExact(CreatedAt, formats, CultureInfo.InvariantCulture, DateTimeStyles.RoundtripKind, out DateTime parsedDate))
                {
                    return parsedDate.ToString("dd MMM yyyy");
                }
                else
                {
                    Console.WriteLine($"Failed to parse date: {CreatedAt}"); 
                    return "Invalid Date";
                }
            }
        }

    }
}