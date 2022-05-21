# Generated by Django 4.0.4 on 2022-05-21 12:39

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import library.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60, unique=True)),
                ('editorial', models.CharField(blank=True, max_length=25, null=True)),
                ('Author', models.CharField(max_length=40)),
                ('gender', models.CharField(max_length=20)),
                ('author_country', models.CharField(blank=True, max_length=20, null=True)),
                ('number_of_pages', models.PositiveIntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(1000)])),
                ('year_edition', models.CharField(blank=True, max_length=5, null=True)),
                ('price', models.PositiveIntegerField(default=10, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(1000)])),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'book',
                'verbose_name_plural': 'books',
            },
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15)),
                ('first_lastname', models.CharField(max_length=20)),
                ('second_lastname', models.CharField(blank=True, max_length=20, null=True)),
                ('birthdate', models.DateField()),
                ('dni', models.CharField(blank=True, max_length=12, null=True)),
                ('address', models.CharField(max_length=50)),
                ('population', models.CharField(blank=True, max_length=30, null=True)),
                ('province', models.CharField(blank=True, max_length=20, null=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'customer',
                'verbose_name_plural': 'customers',
            },
        ),
        migrations.CreateModel(
            name='Bookrent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rent_date', models.DateField(default=library.models.set_date_today)),
                ('max_return_date', models.DateField(default=library.models.get_max_return_date)),
                ('return_date', models.DateField(blank=True, null=True)),
                ('book_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='library.book')),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='library.customer')),
            ],
            options={
                'verbose_name': 'bookrent',
                'verbose_name_plural': 'bookrents',
            },
        ),
    ]
