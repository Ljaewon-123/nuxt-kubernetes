# Docker composd 에서 할때와 다르게 nginx를 별개의 컨테이너(k8s에서는 pod)로 안하는 이유 

일단.... pod는 언제든지 교체 가능한 개념이여야 해서 
그런식으로 하면 안될거 같고 일단 front쪽에 합쳐서 ㅇㅇ;


# Ningx를 k82에서 사용할거면 StatefulSet 검토 

