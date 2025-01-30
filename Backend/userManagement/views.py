from rest_framework.views import APIView
from django.shortcuts import render
from .models import UserManagement
from .models import RecipieManagement
from .serializers import UserManagementSerializer
from .serializers import RecipieManagementSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
from .models import Review
from .serializers import ReviewSerializer
from django.shortcuts import get_object_or_404


class UserManagementView(viewsets.ModelViewSet):
    queryset = UserManagement.objects.all()
    serializer_class = UserManagementSerializer

    @action(detail=False, methods=['GET'])
    def total_count_users(self, request):
        total_users = UserManagement.objects.count()
        return Response({"total_users": total_users})

class RecipieManagementView(viewsets.ModelViewSet):
    queryset = RecipieManagement.objects.all()
    serializer_class = RecipieManagementSerializer

    def get_queryset(self):
        return RecipieManagement.objects.filter(status='A')

    def retrieve(self, request, pk=None):
        recipe = get_object_or_404(RecipieManagement, pk=pk)
        serializer = self.get_serializer(recipe)
        reviews = recipe.reviews.all().order_by("-created_at")
        reviews_serializer = ReviewSerializer(reviews, many=True)
        return Response({**serializer.data, 'reviews': reviews_serializer.data})

    @action(detail=False , methods=['GET'])
    def total_count_recipies(self,request):
        totalRecipies = RecipieManagement.objects.count()
        return Response({"total recipies":totalRecipies})

    @action(detail=True, methods=['POST'])
    def update_status(self, request, pk=None):
        try:
            recipe = self.get_object()
            status = request.data.get('status')
            if status not in ['P', 'A', 'R']:
                return Response({"error": "Invalid status value"}, status=400)

            recipe.status = status
            recipe.save()
            return Response({"message": "Status updated successfully"})
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Thank you for your feedback!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all().order_by('-created_at')
    serializer_class = ReviewSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Review added successfully!"}, status=status.HTTP_201_CREATED)
        return Response({"error": "Validation failed", "details": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)