using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MoneyTrackingBackend.Entities;

namespace MoneyTrackingBackend
{
	public class MoneyTrackingDbContext:IdentityDbContext
	{
        public MoneyTrackingDbContext(DbContextOptions<MoneyTrackingDbContext> options) :base(options) { }
        public DbSet<Income> Incomes { get; set; }
        public DbSet<Expense> Expenses { get; set; }
    }
}

