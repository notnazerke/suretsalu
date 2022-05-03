from rest_framework import serializers

class FavouriteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(allow_blank=True)
    description = serializers.CharField(allow_blank=True)
    price = serializers.IntegerField()