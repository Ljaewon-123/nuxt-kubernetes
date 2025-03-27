# nuxt-kubernetes
Nuxt Kubernetes

```sh
kubectl apply -f redis-pv.yaml
kubectl apply -f redis-pvc.yaml
kubectl apply -f redis-deployment.yaml
kubectl apply -f redis-service.yaml
```

```sh
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongodb-pv.yaml
kubectl apply -f mongodb-pvc.yaml
kubectl apply -f mongodb-deployment.yaml
kubectl apply -f mongodb-service.yaml
```

```sh
kubectl apply -f web-deployment.yaml
kubectl apply -f web-service.yaml
```

#### Do not use
> Nuxtjs does not require nginx.
```
kubectl apply -f nginx-configmap.yaml
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml
```


docker
```docker
docker build -t nogaree/jaewon-login:latest . 
docker push nogaree/jaewon-login:latest 
```


cluster config
```sh
aws eks --region ap-northeast-2 update-kubeconfig --name <cluster-name>
```

etc
```sh
kubectl exec -it <NAME> -- sh
```

log pod 

--since 옵션을 사용하면, 특정 시간만큼 이전의 로그를 볼 수 있습니다. 예를 들어, 지난 1시간 동안의 로그를 보고 싶다면:


```sh
kubectl logs -l app=web --since=1h

```

--tail 옵션을 사용하면, 출력할 로그의 마지막 N줄을 지정할 수 있습니다. 예를 들어, 마지막 100줄의 로그를 보고 싶다면:
```sh
kubectl logs -l app=web --tail=100

```
특정 Pod의 로그를 보고 싶다면, Pod 이름을 지정할 수도 있습니다.
```sh
kubectl logs <ID|NAME>
```



### 추가적인 멀티 클러스터 문서 
```
https://aws.amazon.com/ko/blogs/tech/build-highly-available-application-with-amazon-eks-multi-cluster-loadbalancing/
```

