from rest_framework import serializers
from .models import Book, Customer, Bookrent

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class BookrentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookrent
        fields = '__all__'
        read_only_fields = ('rent_date','max_return_date',)