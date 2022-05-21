from django.contrib import admin
from .models import Book, Customer, Bookrent

admin.site.register(Book)
admin.site.register(Customer)
admin.site.register(Bookrent)