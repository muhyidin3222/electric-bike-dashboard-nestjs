import * as cluster from 'cluster';
import * as os from 'os';
// import { AwsService } from 'src/aws/aws.service';

export function runInCluster(bootstrap: () => Promise<void>) {
  // let awsService: AwsService;
  const env: any = 'development'
  if (env !== 'production') {
    bootstrap();
  } else {
    if (cluster.isMaster) {
      const numberOfCores = os.cpus().length;
      for (let i = 0; i < numberOfCores; ++i) {
        cluster.fork();
      }
    } else {
      bootstrap();
    }
  }
}
