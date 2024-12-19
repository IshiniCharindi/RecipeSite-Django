# Generated by Django 5.1.2 on 2024-12-19 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userManagement', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipieManagement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image1', models.ImageField(upload_to='uploads/images')),
                ('image2', models.ImageField(upload_to='uploads/images')),
                ('title', models.CharField(max_length=250)),
                ('ingredients', models.CharField(max_length=2000)),
                ('steps', models.CharField(max_length=2000)),
                ('description', models.CharField(max_length=3000)),
            ],
        ),
    ]
