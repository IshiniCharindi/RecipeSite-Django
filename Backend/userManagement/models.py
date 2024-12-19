from django.db import models

class UserManagement(models.Model):

    name=models.CharField(max_length=150, null=False, blank=False)
    email=models.EmailField(max_length=150,null=False,blank=False)
    password=models.CharField(max_length=20,null=False,blank=False)

class RecipieManagement(models.Model):
    image1 = models.ImageField(upload_to='uploads/images',null=False,blank=False)
    image2 = models.ImageField(upload_to='uploads/images',null=False,blank=False)
    title = models.CharField(max_length=250,null=False,blank=False)
    ingredients = models.CharField(max_length=2000 , null=False,blank=False)
    steps = models.CharField(max_length=2000,null=False,blank=False)
    description = models.CharField(max_length=3000 , null=False,blank=False)



