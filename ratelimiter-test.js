import grpc from 'k6/net/grpc';
import { check } from 'k6';

const client = new grpc.Client();
client.loadProtoset('envoy.protoset');

export default () => {
  client.connect('ratelimiter:8081', {
    plaintext: true,
  });

  const data = {
    domain: 'per-bucket',
    descriptors: [
      {
        entries: [
          { key: 'bucket', value: 'mz-bucket' },
          { key: 'category', value: 'GET' },
        ],
      },
    ],
    hitsAddend: 1,
  };

  const response = client.invoke(
    'envoy.service.ratelimit.v3.RateLimitService/ShouldRateLimit',
    data,
  );

  check(response, {
    'status is OK': (r) => r && r.status === grpc.StatusOK,
  });

  client.close();
};
