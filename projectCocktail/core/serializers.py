from rest_framework import serializers
from .models import Category, Subcategory, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    subcategory = serializers.PrimaryKeyRelatedField(queryset=Subcategory.objects.all())

    class Meta:
        model = Product
        fields = '__all__'
    
    def create(self, validated_data):
        category = validated_data['category']
        subcategory = validated_data.get('subcategory')

        # Make sure that the provided subcategory belongs to the selected category
        if subcategory and subcategory.category != category:
            raise serializers.ValidationError("Selected subcategory does not belong to the selected category.")

        return super().create(validated_data)