from django.db import models

class MainManager(models.Manager):
    def query_set(self):
        return super().get_queryset().order_by('name')

class Course(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default="")
    likes = models.IntegerField(default=0)
    teacher = models.CharField(max_length=200)
    ratings = models.TextField(default=0)
    price = models.IntegerField(default=0)
    objects = models.Manager()  # the default manager
    manager = MainManager()

    def __str__(self):
        return f'ID-{self.pk} : {self.name}'

class Contact(models.Model):
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    telephone = models.IntegerField(default=0)
    email = models.CharField(max_length=200)
    objects = models.Manager()  # the default manager
    manager = MainManager()

    def __str__(self):
        return f'ID-{self.pk} : {self.name}'

class Teachers(models.Model):
    name = models.CharField(max_length=200)
    type_of_art = models.CharField(max_length=200)

    def __str__(self):
        return f'ID-{self.pk} : {self.name}'


class FavouriteCourse(models.Model):
    name = models.CharField(max_length=200)
    ratings = models.TextField(default=0)
    likes = models.IntegerField(default=0)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return f'ID-{self.pk} : {self.course.name} - {self.name}'


class MasterClass(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    teacher = models.ForeignKey(Teachers, on_delete=models.CASCADE, related_name='masterclasses')
    price = models.IntegerField(default=0)

    def __str__(self):
        return f'ID-{self.pk} : {self.teacher.name} - {self.name}'