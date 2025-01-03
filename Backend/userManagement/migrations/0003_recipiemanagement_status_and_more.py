# Generated by Django 5.1.2 on 2024-12-22 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userManagement', '0002_recipiemanagement'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipiemanagement',
            name='status',
            field=models.CharField(choices=[('P', 'Pending'), ('A', 'Approved'), ('R', 'Rejected')], default='P', max_length=1),
        ),
        migrations.AlterField(
            model_name='recipiemanagement',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='recipiemanagement',
            name='ingredients',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='recipiemanagement',
            name='steps',
            field=models.TextField(),
        ),
    ]
