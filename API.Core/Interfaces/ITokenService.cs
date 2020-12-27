using API.Core.DbModels.Identity;

namespace API.Core.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
