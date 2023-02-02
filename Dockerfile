FROM alpine:3.13
RUN apk update && apk add docker curl
RUN curl -LO "https://dl.k8s.io/release/stable.txt" && \
    export KUBECTL_VERSION=$(cat stable.txt) && \
    rm stable.txt && \
    curl -L --remote-name "https://dl.k8s.io/${KUBECTL_VERSION}/bin/linux/amd64/kubectl" && \
    chmod +x kubectl && \
    mv kubectl /usr/local/bin/
CMD ["/bin/sh"]