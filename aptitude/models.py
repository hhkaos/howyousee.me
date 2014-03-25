from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Aptitude(models.Model):
    name = models.CharField(max_length=200)
    creation_date = models.DateTimeField(auto_now_add=True, blank=True)
    def __unicode__(self):  
		return self.name

class Vote(models.Model):
	user = models.ForeignKey(User)
	aptitude = models.ForeignKey(Aptitude)
	votes = models.IntegerField(default=0)
	