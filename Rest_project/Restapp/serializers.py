from rest_framework import serializers

from Restapp.models import Task


class DetailSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Task
        fields = ['id','subject','description']
