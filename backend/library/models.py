import os
from turtle import title
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator

def get_max_return_date():
    return timezone.now() + timezone.timedelta(days=15)

def set_date_today():
    return timezone.now()

class Book(models.Model):
    title                       = models.CharField(max_length=60, null=False, blank=False, unique=True)
    editorial                   = models.CharField(max_length=25, null=True, blank=True)
    Author                      = models.CharField(max_length=40, null=False, blank=False)
    gender                      = models.CharField(max_length=20, null=False, blank=False)
    author_country              = models.CharField(max_length=20, null=True, blank=True)
    number_of_pages             = models.PositiveIntegerField(default=1, null=False, blank=False, validators=[MinValueValidator(1), MaxValueValidator(1000)])
    year_edition                = models.CharField(max_length=5, null=True, blank=True)
    price                       = models.PositiveIntegerField(default=10, null=False, blank=False, validators=[MinValueValidator(1), MaxValueValidator(1000)])
    is_active                   = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('book')
        verbose_name_plural = _('books')

    def __str__(self):
        return self.title

class Customer(models.Model):
    name                        = models.CharField(max_length=15, null=False, blank=False)
    first_lastname              = models.CharField(max_length=20, null=False, blank=False)
    second_lastname             = models.CharField(max_length=20, null=True, blank=True)
    birthdate                   = models.DateField(null=False, blank=False)
    dni                         = models.CharField(max_length=12, null=True, blank=True)
    address                     = models.CharField(max_length=50, null=False, blank=False)
    population                  = models.CharField(max_length=30, null=True, blank=True)
    province                    = models.CharField(max_length=20, null=True, blank=True)
    is_active                   = models.BooleanField(default=True)

    class Meta:
        verbose_name = _('customer')
        verbose_name_plural = _('customers')

    def __str__(self):
        return self.name

    def customer_fullname(self):
        return f'Customer {self.name} {self.first_lastname} {self.second_lastname}'

class Bookrent(models.Model):
    book_id                     = models.ForeignKey(Book, on_delete=models.DO_NOTHING)
    customer_id                 = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    rent_date                   = models.DateField(null=False, blank=False, default=set_date_today)
    max_return_date             = models.DateField(null=False, blank=False, default=get_max_return_date)
    return_date                 = models.DateField(null=True, blank=True)

    class Meta:
        verbose_name = _('bookrent')
        verbose_name_plural = _('bookrents')
