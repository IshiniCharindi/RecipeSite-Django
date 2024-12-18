from django.db import models

class UserManagement(models.Model):

    name=models.CharField(max_length=150, null=False, blank=False)
    email=models.EmailField(max_length=150,null=False,blank=False)
    password=models.CharField(max_length=20,null=False,blank=False)

