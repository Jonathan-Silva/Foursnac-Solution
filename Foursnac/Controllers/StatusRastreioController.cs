using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Foursnac.Controllers
{
    public class StatusRastreioController : ApiController
    {
        // GET: api/StatusRastreio
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/StatusRastreio/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/StatusRastreio
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/StatusRastreio/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/StatusRastreio/5
        public void Delete(int id)
        {
        }
    }
}
