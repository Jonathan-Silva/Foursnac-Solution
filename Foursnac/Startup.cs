using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Foursnac.Startup))]
namespace Foursnac
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
