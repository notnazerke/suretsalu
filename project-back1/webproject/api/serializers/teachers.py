from rest_framework import serializers

from api.models import Teachers
class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = ('id', 'name', 'type_of_art')

