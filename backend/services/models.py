from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    completado = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre

