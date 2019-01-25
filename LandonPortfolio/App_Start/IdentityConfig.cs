using System;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Web.Configuration;
using System.Net;

namespace LandonPortfolio
{
    public class PersonalEmail
    {
        public async Task SendAsync(MailMessage message)
        {
            var YahooUsername = WebConfigurationManager.AppSettings["username"];
            var YahooPassword = WebConfigurationManager.AppSettings["password"];
            var host = WebConfigurationManager.AppSettings["host"];
            int port = Convert.ToInt32(WebConfigurationManager.AppSettings["port"]);

            using (var smtp = new SmtpClient()
            {
                Host = host,
                Port = port,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(YahooUsername, YahooPassword)
            })
            {
                try
                {
                    await smtp.SendMailAsync(message);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    await Task.FromResult(0);
                }
            };
        }
    }
}