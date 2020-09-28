using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiResponse
    {

        public ApiResponse(int statusCode, string message = null)
        {
            this.StatusCode = statusCode;
            this.Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            string errorMessage = string.Empty;
            switch (statusCode)
            {
                case 400:
                    errorMessage = "A Bad request!";
                    break;
                case 401:
                    errorMessage = "Authorized error";
                    break;
                case 404:
                    errorMessage = "Resource Not Found";
                    break;
                case 500:
                    errorMessage = "Server Error";
                    break;
            }
            return errorMessage;
        }
    }
}
