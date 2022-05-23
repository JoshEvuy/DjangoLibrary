from django.contrib import admin
from .models import Book, Customer, Bookrent

class BookAdmin(admin.ModelAdmin):
    list_per_page: 25

class CustomerAdmin(admin.ModelAdmin):
    list_per_page: 25

class BookrentAdmin(admin.ModelAdmin):
    list_per_page: 25

admin.site.register(Book, BookAdmin)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Bookrent, BookrentAdmin)