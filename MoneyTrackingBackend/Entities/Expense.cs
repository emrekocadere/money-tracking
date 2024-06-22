using System;
namespace MoneyTrackingBackend.Entities
{
    public class Expense
    {

        public int Id { get; set; }
        public int Amount { get; set; }
        public int NewBalance { get; set; }
        public string Description { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }

    }
}

