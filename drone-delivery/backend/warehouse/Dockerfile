FROM golang:alpine AS builder

RUN apk --update add \
	git openssl \
	&& rm /var/cache/apk/*

RUN mkdir -p /go/src/drone-delivery/warehouse
WORKDIR /go/src/drone-delivery/warehouse

COPY go.mod /go/src/drone-delivery/warehouse
COPY go.sum /go/src/drone-delivery/warehouse
RUN go mod download
COPY ./ /go/src/drone-delivery/warehouse
WORKDIR /go/src/drone-delivery/warehouse/cmd/drone-delivery-warehouse
RUN go install

#Second stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
RUN mkdir -p /go/src/drone-delivery/warehouse
WORKDIR /go/src/drone-delivery/warehouse
COPY --from=builder /go/src/drone-delivery/warehouse /go/src/drone-delivery/warehouse
COPY --from=builder /go/bin/drone-delivery-warehouse /go/bin/drone-delivery-warehouse
ENTRYPOINT ["/go/bin/drone-delivery-warehouse"]
EXPOSE 2000