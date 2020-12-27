using Microsoft.AspNetCore.Identity;

namespace API.Core.DbModels.Identity
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public Address Address { get; set; }
    }
}
