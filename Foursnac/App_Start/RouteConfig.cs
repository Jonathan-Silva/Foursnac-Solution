using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Foursnac
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "estabelecimento",
                "{pagina}",
                new { controller = "Home", action = "IndexEstabelecimento" });

            routes.MapRoute(
                "Delivery",
                "{controller}/{cidade}",
                new { controller = "Delivery", action = "Index" });


            routes.MapRoute(
                "DeliveryEstabelecimento",
                "{controller}/{actionName}",
                new { controller = "Estabelecimento", action = "Index" });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
