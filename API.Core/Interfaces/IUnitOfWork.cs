using API.Core.DbModels;
using System;
using System.Threading.Tasks;

namespace API.Core.Interfaces
{
    public interface IUnitOfWork :IDisposable
    {
         IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;

        Task<int> Complete();
    }
}
