from django.db import models
from django.contrib.auth.models import User
from django.db.models import Avg

# Create your models here.
class Aptitude(models.Model):
    name = models.CharField(max_length=200)
    creation_date = models.DateTimeField(auto_now_add=True)
    #def rating(self):
    	#return Vote.objects.filter(user=self.user).aggregate(Avg('votes'))

    def __unicode__(self):  
		return self.name

class Vote(models.Model):
	user = models.ForeignKey(User, related_name='user_voted')
	user_who_voted = models.ForeignKey(User, related_name='user_who_voted')
	aptitude = models.ForeignKey(Aptitude)
	votes = models.IntegerField(default=0)
	