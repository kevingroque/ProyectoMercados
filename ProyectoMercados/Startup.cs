using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProyectoMercados.Startup))]
namespace ProyectoMercados
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
