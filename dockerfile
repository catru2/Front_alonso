# Usa una imagen de Nginx como base
FROM nginx:latest

# Copia tus archivos al directorio predeterminado de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 8080
EXPOSE 80