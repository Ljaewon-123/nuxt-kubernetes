# nuxt-kubernetes
Nuxt Kubernetes


kubectl apply -f redis-pv.yaml
kubectl apply -f redis-pvc.yaml
kubectl apply -f redis-deployment.yaml
kubectl apply -f redis-service.yaml

kubectl apply -f mongodb-pv.yaml
kubectl apply -f mongodb-pvc.yaml
kubectl apply -f mongodb-deployment.yaml
kubectl apply -f mongodb-service.yaml

kubectl apply -f web-deployment.yaml
kubectl apply -f web-service.yaml

kubectl apply -f nginx-configmap.yaml
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml