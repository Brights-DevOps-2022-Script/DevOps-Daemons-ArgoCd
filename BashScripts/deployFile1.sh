git pull "https://$1:$2@github.com/Brights-DevOps-2022-Script/team-3-argoTest.git HEAD:main"
git checkout main 

  echo 'apiVersion: kustomize.config.k8s.io/v1beta1             >  ./argocd/kustomize.yaml
  echo" kind: Kustomization"                                    >> ./argocd/kustomize.yaml
  echo" resources:"                                             >> ./argocd/kustomize.yaml  
  echo"  - nginx.yml"                                           >> ./argocd/kustomize.yaml
  echo" images:"                                                >> ./argocd/kustomize.yaml
  echo "  - name: ANIS-NGINX"                                   >> ./argocd/kustomize.yaml
  echo "newName: $3:$4" >> ./argocd/kustomize.yaml

git add ./argocd/kustomize.yaml"
git commit -m 'kustom [skip ci]'"
git push https://${GIT_USERNAME}:$5 +'HEAD:main'
