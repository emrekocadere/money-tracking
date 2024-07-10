using System;
namespace MoneyTrackingBackend.CustomResponse
{
	public class CustomResponse
	{

		public CustomStatusCode StatusCode;
		public string StatusDesc;
		public List<string> Messages { get; set; }
		public Dictionary<string, object> ExtraDatas { get; set; }
	}
}

