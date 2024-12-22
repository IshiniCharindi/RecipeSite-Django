from django.db import models

class UserManagement(models.Model):
    name = models.CharField(max_length=150, null=False, blank=False)
    email = models.EmailField(max_length=150, null=False, blank=False)
    password = models.CharField(max_length=20, null=False, blank=False)

class RecipieManagement(models.Model):
    PENDING = 'P'
    APPROVED = 'A'
    REJECTED = 'R'

    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (REJECTED, 'Rejected'),
    ]

    image1 = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    image2 = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    title = models.CharField(max_length=250, null=False, blank=False)
    ingredients = models.TextField(null=False, blank=False)
    steps = models.TextField(null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    status = models.CharField(
        max_length=1,
        choices=STATUS_CHOICES,
        default=PENDING,
    )


    def __str__(self):
        return self.title
